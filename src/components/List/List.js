import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const ListWrapper = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h1 class={styles.noItems}>
        There's nothing here, please add your first item!
      </h1>
    )}
  </>
);

export default ListWrapper;
