// src/stories/MyComponent.stories.js
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MyComponent from '../MyComponent'; // 예시로 만든 컴포넌트

export default {
  title: 'Example/MyComponent',
  component: MyComponent,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
};

export const Default = () => <MyComponent />;
