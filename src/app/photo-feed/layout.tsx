import { ReactNode } from 'react';
import "./styles.css";

export default function Layout(props: {
  modal: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
