
Why do we pass concrete classes as dependencies to the facade class instead of instantiating them within it ?

The reason we pass the concrete classes as dependencies (via constructor parameters) instead of instantiating them inside the Facade class itself follows key software design principles:

# Dependency Injection (DI)
- By passing the concrete classes as props (dependencies), we decouple the Facade from specific implementations. This makes the facade more flexible and easier to test.
- Example: If we want to replace one subsystem class with a mock class for unit testing, we can do that easily.

# Open/Closed Principle (OCP)
- If we instantiate concrete classes inside the Facade, modifying or extending behavior would require changing the Facade itself.
- Instead, by passing dependencies from outside, we can swap implementations without modifying the Facade.

# Easier Testing and Mocking
- If the Facade instantiates the concrete classes inside, it would be harder to mock or replace them during unit testing.
- Passing them as constructor arguments allows mocking those dependencies easily.

# Conclusion
- Instead of hardcoding dependencies inside the Facade, we inject them to make the system more maintainable, extendable, and testable.