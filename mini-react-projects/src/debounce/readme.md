# Debouncing vs. Throttling

| Feature          | Debouncing                          | Throttling                          |
|------------------|-------------------------------------|-------------------------------------|
| **Execution**    | After inactivity                    | At regular intervals                |
| **Frequency**    | Only once after the delay           | At most once per interval           |
| **Use Case**     | Search, resize, type-ahead          | Scrolling, drag, continuous updates |
| **Example Analogy** | Waiting for silence before speaking | Speaking every 5 seconds, no matter what |