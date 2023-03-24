import React from 'react';
import styles from './TagsInput.module.css';

function TagsInput({ tags, addTags, deleteTags }: any) {
  return (
    <div className={styles.TagsInput}>
      <ul className={styles.TagsUL}>
        {tags.map((tag: any, index: number) => {
          return (
            <li key={index} className={styles.Tag}>
              <span className={styles.TagTitle}>{tag}</span>
              <span
                className={styles.TagClose}
                onClick={() => deleteTags(index)}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
      <input
        className={styles.FormControl}
        type="text"
        id="tags"
        name="tags"
        placeholder="Press Enter to add tags."
        onKeyUp={(e: any) => (e.key === 'Enter' ? addTags(e) : null)}
      />
    </div>
  );
}

export default TagsInput;
