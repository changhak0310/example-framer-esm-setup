// import * as React from "react";
import styles from "./Button.modules.css";

// export function Button({ title = "Title" }) {
//   return <button className={styles.button}>{title}</button>;
// }

import colors from "./constants/colors";
//import { css } from "@emotion/react";

interface ButtonInterface {
  variant: 'primary' | 'secondary',
  size: 'medium' | 'large',
  title: string,
  full: boolean,
}

export function Button({ variant='primary', size='medium', full=true, title="test", ...props }: ButtonInterface) {
  const a = "width: 100%";
    return (
      <button
        className={styles.button}
        // `
        //   ${full ? "width: 100%" : null};
        //   ${TYPE_VARIANTS[variant]};
        //   ${SIZE_VARIANTS[size]};
        // `
        {...props}
      >{title}</button>
    );
  }
  
  const TYPE_VARIANTS = {
    primary: {
      color: colors.gray90,
      backgroundColor: colors.primary70,
      '&:hover': {
        backgroundColor: colors.primary80,
      },
    },
    secondary: {
      color: colors.gray30,
      backgroundColor: colors.gray90,
      '&:hover': {
        backgroundColor: colors.gray70,
      },
    },
  };
  
  const SIZE_VARIANTS = {
    medium: {
      fontSize: '1rem',
      padding: '0.75rem 1rem',
    },
    large: {
      fontSize: '17px',
      padding: '11px 22px',
    },
  };
  