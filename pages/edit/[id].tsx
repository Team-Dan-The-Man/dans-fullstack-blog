// Import the Edit component from "@/components/edit/Edit".
// This component is likely responsible for providing the functionality to edit some content.
import Edit from "@/components/edit/Edit";

// Define the EditPage functional component.
// This component serves as a page in your Next.js application for editing content.
function EditPage() {
    // Render the Edit component.
    // When the EditPage component is rendered, it displays the Edit component.
    return (
        <Edit />
    )
}

// Export the EditPage component as the default export.
// This means when you import from this file, you'll get the EditPage component by default.
export default EditPage;
