import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.headingBackground}>
          Very very carefully chosen tutors
        </span>
      </div>
      <div className={styles.content}>
        <span className={styles.contentHeading}>
          Cambridge & IB Mathematics Subject Choice
        </span>
        <div className={styles.courses}>
          <ul>
            <li className={styles.courseName}>IGCSE - Mathematics</li>
            <li>Mathematics Core/Extended 0580</li>
            <li>International Mathematics 0607</li>
            <li>Additional Mathematics 0606</li>
          </ul>
          <ul>
            <li className={styles.courseName}>AS-A Level</li>
            <li>Mathematics 9709</li>
            <li>Mathematics Further 9231</li>
          </ul>
          <ul>
            <li className={styles.courseName}>IBDP</li>
            <li>Mathematics: AA SL</li>
            <li>Mathematics: AA HL</li>
            <li>Mathematics: AI SL</li>
            <li>Mathematics: AI HL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
