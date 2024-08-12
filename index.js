function setCarat(element) {
    // Place cursor at the end of a content editable div
    if (element.type !== "textarea" && element.getAttribute("contenteditable") === "true") {
        element.focus()
        window.getSelection().selectAllChildren(element)
        window.getSelection().collapseToEnd()
    } else {
        // Place cursor at the end of text areas and input elements
        element.focus()
        element.select()
        window.getSelection().collapseToEnd()
    }
}