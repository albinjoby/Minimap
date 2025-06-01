#  Minimap Page Viewer

A dynamic **HTML minimap viewer** that overlays a live, scaled-down version of the current webpage in the corner. It visually represents the scroll position and helps users understand where they are in long-form content.



## Preview

![Minimap Preview](./minimap.png)


##  Features

- 📦 **Auto-generated minimap** using an `<iframe>` clone of the page
-  **Scaled view** of the entire page layout
-  **Scroll indicator** shows current viewport position
-  **Responsive** to window resizes
-  **Scripts removed** in the iframe for safety and performance


##  How It Works

- A `div`, `iframe`, and viewer box are dynamically created and injected into the DOM.
- The iframe renders a clean clone of the current page (excluding scripts).
- The main scroll position is tracked and used to move the viewer box inside the minimap.
- Resize events recalculate the scaling factor to keep everything proportional.
