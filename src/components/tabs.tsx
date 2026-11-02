import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { list, panel, root, trigger } from "./exercises-lab.css";

interface Exercise {
  Component: React.ComponentType;
  id: string;
  label: string;
}
export function Tabs({ exercises }: { exercises: Exercise[] }) {
  return (
    <Root className={root} defaultValue={exercises[0].id}>
      <List aria-label="Exercícios" className={list}>
        {exercises.map((exercise) => (
          <Trigger className={trigger} key={exercise.id} value={exercise.id}>
            {exercise.label}
          </Trigger>
        ))}
      </List>
      {exercises.map((exercise) => {
        const { Component } = exercise;
        return (
          <Content className={panel} key={exercise.id} value={exercise.id}>
            <Component />
          </Content>
        );
      })}
    </Root>
  );
}
