# Lab01

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Quick Reference: Angular Concepts

### 1. Difference between SPA and MPA

**SPA (Single Page Application):** Loads one HTML page; JavaScript dynamically updates content without full page reloads. Fast, smoother UX. Examples: Gmail, Angular apps.

**MPA (Multi Page Application):** Server returns a new HTML page for each navigation. Full page reloads occur. Better SEO, simpler architecture. Examples: Traditional blogs, Wikipedia.

---

### 2. MVC vs MVVM in Angular Context

**MVC:** Model handles data, View displays it, Controller handles user input. Tightly coupled.

**MVVM (used in Angular):** Model holds data, ViewModel exposes it to the View, View binds declaratively. Loose coupling with two-way binding (`{{ }}`, `[property]="value"`, `(event)="method()"`).

---

### 3. Component File Purposes

- **`.ts`** - Component class: Contains logic, properties, and methods
- **`.html`** - Template: Displays data and structure; contains interpolation and event bindings
- **`.css`** - Styles: Component-scoped styling only
- **`.spec.ts`** - Unit tests: Tests component logic and DOM rendering

---

### 4. Interpolation

Interpolation (`{{ }}`) binds component properties to the template, displaying dynamic data.

**Examples:**
- `{{ student.name }}` - displays property value
- `{{ age + 1 }}` - expressions
- `{{ getName() }}` - method calls
- `{{ isAdult ? 'Adult' : 'Minor' }}` - ternary operators


