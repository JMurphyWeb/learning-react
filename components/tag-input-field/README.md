# 'Tag Input' Component
To make a simple (non styled) tagging input react component.

Key features:
 - Input field
 - Comma creates a tag from last word
 - Some indication of separate tags (border?)
 - Delete tag functionality
 - Arrow keys take curser between tags

Stretch Goals:
 - Edit tag functionality
 - Arrow keys can be used to select tags
 - Enter press on selected tag will lead to edit




 Inspiration for component idea:
 building an "tag input" component. You know, something that looks like a regular input field, but when you type comma or blur the field, it creates an inline tag. Be sure that you can edit existing tags, add them, remove them, insert tags at any location in the list. Now make it handle keyboard interaction (arrow keys to go between tags or select them, enter to edit/confirm, etc). Now make it work like a regular input when using tab to focus or blur your field. Bonus, make it support newlines and arbitrarily long tags without breaking the flow of the field or breaking the display of other tags (hint: use flexbox). Just for fun, make your tags accept arbitrary html such as an img tag as their content (at least for the initial tags, not for the ability to edit existing tags or add html via the text field).
