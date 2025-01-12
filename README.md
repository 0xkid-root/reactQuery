# **React Query Learning Repository**

Welcome to my React Query learning repository! This repository documents my journey of learning and understanding **React Query**, a powerful library for managing server state in React applications. Below, you’ll find a breakdown of the core concepts I’ve explored, along with explanations and resources.

---

## **Table of Contents**
1. [React Query Overview](#react-query-overview)
2. [Core Concepts](#core-concepts)
   - [useQuery](#usequery)
   - [useMutation](#usemutation)
   - [QueryClientProvider and QueryClient](#queryclientprovider-and-queryclient)
   - [Cache Time and Stale Time](#cache-time-and-stale-time)
   - [Polling and Real-Time Applications](#polling-and-real-time-applications)
   - [Error Handling and Optimistic UI](#error-handling-and-optimistic-ui)
   - [Invalidating Queries](#invalidating-queries)
3. [Best Practices and Performance](#best-practices-and-performance)
4. [Resources](#resources)

---

## **React Query Overview**
React Query is a powerful library for managing **server state** in React applications. It simplifies data fetching, caching, and updating from APIs, making it easier to build efficient and responsive apps.

---

## **Core Concepts**

### **useQuery**
- A hook for fetching data from APIs.
- **Key Parameters**:
  - `queryKey`: A unique identifier for the query.
  - `queryFn`: A function that fetches the data.
- **Common Options**:
  - `staleTime`: Determines how long data is considered fresh (default: 0).
  - `refetchInterval`: Automatically refetches data at specified intervals.
  - `enabled`: Conditionally enables or disables the query.

### **useMutation**
- A hook for handling data mutations (e.g., POST, PUT, DELETE requests).
- **Key Features**:
  - Manages mutation logic, including loading, error, and success states.
  - Supports **optimistic updates** (updating the UI before the server responds).

### **QueryClientProvider and QueryClient**
- **QueryClient**:
  - Manages all queries and mutations in your app.
  - Provides methods like `invalidateQueries` and `setQueryData`.
- **QueryClientProvider**:
  - A wrapper component that provides the `QueryClient` to your app via React Context.

### **Cache Time and Stale Time**
- **Stale Time**:
  - Defines how long data is considered fresh before it becomes stale.
  - Stale data is refetched automatically when the query is reused.
- **Cache Time**:
  - Determines how long unused data stays in the cache before being garbage collected.

### **Polling and Real-Time Applications**
- **Polling**:
  - Automatically refetches data at intervals using the `refetchInterval` option.
- **Real-Time Applications**:
  - Use WebSockets or similar technologies for real-time updates.
  - Manually update the cache using `queryClient.setQueryData`.

### **Error Handling and Optimistic UI**
- React Query provides built-in error handling and retry mechanisms.
- **Optimistic UI**:
  - Updates the UI immediately while waiting for the server response, improving user experience.

### **Invalidating Queries**
- Use `queryClient.invalidateQueries` to mark queries as stale and trigger a refetch.
- Useful for ensuring data is up-to-date after mutations.

---

## **Best Practices and Performance**
- **Minimize Re-Renders**:
  - Use `select` to transform data and avoid unnecessary re-renders.
- **Conditional Fetching**:
  - Use the `enabled` option to conditionally fetch data.
- **Concurrent Mode**:
  - Explore React’s Concurrent Mode for better performance.
- **Suspense**:
  - Use the `suspense` option for simpler loading states.

---

## **Resources**
Here are some resources that helped me learn React Query:
- [Official React Query Documentation](https://tanstack.com/query/latest)
- [React Query Tutorials on YouTube](https://www.youtube.com/results?search_query=react+query+tutorial)
- [React Query GitHub Repository](https://github.com/TanStack/query)

---

## **How to Use This Repository**
1. Explore the **concepts** folder for detailed explanations of each React Query feature.
2. Check out the **examples** folder for practical implementations.
3. Feel free to contribute or suggest improvements by opening an issue or pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
