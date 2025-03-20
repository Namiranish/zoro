// import React from 'react'
import React, { useState } from 'react';
import { URL } from '../constants/constants';
import styles from './Recipe.module.css'



const Recipe = () => {
    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
  
    const askQuestion = async () => {
      if (!question) {
        alert('Please enter a food name!');
        return;
      }
  
      const payload = {
        contents: [{
          parts: [{
            text: `Give me the recipe and ingredients for making ${question}. Only give recipes and ingredients. If someone asks a random question, return "No result found."`
          }]
        }]
      };
  
      setLoading(true);
      setResult('');
  
      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        const data = await response.json();
  
        if (data.candidates && data.candidates.length > 0) {
          const recipeText = data.candidates[0].content.parts[0].text;
          setResult(recipeText);
        } else {
          setResult('No result found.');
        }
      } catch (err) {
        console.error('Error fetching recipe:', err);
        setResult('Failed to fetch recipe. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className={styles.recipeContainer}>
  
          <div className={styles.recipeBox}>
            <h2 className={styles.header}>Get Your Recipe🥗</h2>
  
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                className={styles.recipeInput}
                placeholder="Enter Dish Name.."
              />
              <div className={styles.searchIcon}>🍫</div>
            </div>
  
            <button onClick={askQuestion} className={`${styles.recipeButton} ${loading ? 'loading' : ''}`} disabled={loading}>
              {loading ? (
                <>
                  <div className={styles.spinner}></div>
                  Searching Recipe...
                </>
              ) : (
                'Get Recipe'
              )}
            </button>
  
            {result && (
              <div className={styles.recipeResult}>
                <h3 className={styles.resultTitle}>Recipe:</h3>
                <p className={styles.resultText}>{result}</p>
              </div>
            )}
          </div>
        </div>
      
    );
  };
  


export default Recipe