import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './ThemeModeButton.module.css';

function ThemeModeButton() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? true : false);

    const toggleThemeChange = () => {
        if (theme === false) {
          localStorage.setItem("theme", "dark");
          setTheme(true);
        } else {
          localStorage.setItem("theme", "light");
          setTheme(false);
        }
      };
    
      useEffect(() => {
        const light = document.getElementById('light');
        const dark = document.getElementById('dark');

        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));

          if (theme === false) {
            dark.classList.add(`${styles.hidden}`);
            light.classList.remove(`${styles.hidden}`);
          } else {
            light.classList.add(`${styles.hidden}`);
            dark.classList.remove(`${styles.hidden}`);
          }
          
      }, [theme]);

    return (
        <Form className={styles.themeModeButton}>
            <span className={styles.themeLight} onClick={toggleThemeChange} id='light'><i className="fa-solid fa-sun"></i></span>
            <Form.Check 
                type="switch"
                id="custom-switch"
                defaultChecked={theme}
                onChange={() => toggleThemeChange()}
            />
            <span className={styles.themeDark} onClick={toggleThemeChange} id='dark'><i className="fa-solid fa-moon"></i></span>
        </Form>
    );
}

export default ThemeModeButton;