# React + TypeScript + Vite

## Purpose

This project provides a dynamic user interface for configuring communication settings for various laboratory instruments. It allows users to select a specific instrument and view its dedicated settings panel.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing, improving code quality and maintainability.
*   **Vite:** A modern frontend build tool that provides a fast development experience and optimized builds.
*   **Material UI (MUI):** A popular React UI framework for creating visually appealing and consistent user interfaces.

## Architecture

The application employs a modular, plugin-based architecture:

1.  **Main Application (`src/App.tsx`):**
    *   Acts as the main entry point of the application.
    *   Features a dropdown menu allowing users to select the desired instrument driver (e.g., GC2400, HS2400).
    *   Dynamically passes the selected driver's component path to the `CommunicationSettingsHost`.

2.  **Host Component (`src/Components/CommunicationSettingsHost.tsx`):**
    *   Responsible for dynamically loading and rendering the communication settings UI for the instrument selected in the `App` component.
    *   This component likely handles the lazy loading of driver-specific UI components based on the provided path.

3.  **Plugin Interface (`src/Components/PluginInterface.tsx`):**
    *   Defines a standard TypeScript interface (`Props`) that all driver-specific communication settings components must implement.
    *   This interface ensures a consistent contract between the host component and the various driver UIs. It includes:
        *   `text`: For displaying informational text.
        *   `settings`: A placeholder for passing instrument-specific settings data.
        *   `onConfirmClick`: A callback function for the driver to communicate actions or data back to the host.
        *   `log`: A function for the driver to send log messages.

4.  **Driver Components (e.g., `src/Drivers/GC2400/CommunicationSettings.tsx`):**
    *   These are individual React components, each tailored to a specific instrument.
    *   They implement the `PluginInterface` to provide the actual UI elements and logic for configuring a particular instrument.
    *   Examples include `GC2400` and `HS2400`, likely representing PerkinElmer Gas Chromatographs and Headspace Samplers, respectively, as suggested by an image URL found within the GC2400 driver code.

## Interaction Model

1.  The user starts the application and is presented with a dropdown in `App.tsx` to select an instrument.
2.  Upon selection, `App.tsx` updates its state with the file path to the chosen driver's communication settings component.
3.  This path is passed to the `CommunicationSettingsHost.tsx` component.
4.  The `CommunicationSettingsHost` dynamically imports and renders the React component from the specified path.
5.  The selected driver's UI (e.g., `GC2400/CommunicationSettings.tsx`) is displayed, showing instrument-specific information (like an image and title) and interaction elements (like buttons).
6.  The driver component can utilize the props passed from the host (e.g., `onConfirmClick`, `log`) to communicate events or data back to the main application or perform logging.

This architecture allows for easy expansion by adding new driver components that adhere to the `PluginInterface`, without requiring modifications to the core application logic.
