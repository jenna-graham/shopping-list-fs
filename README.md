## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
## https://miro.com/welcomeonboard/Y2FQVVhhWXpNMlFtTHpRNjJzYVR2WVlHc2VRTUZ5N1F1V0N6RzdMT0dMWWtqZmo0MmFvYk9waEo4MWg5UHpGQ3wzNDU4NzY0NTIzOTgzNTQ0MzM5?share_link_id=803307672598
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
 ## List Page
for list of items -- need to show each item so we'll append
to the
checkbox for completing items -- display purchased state -- clicking will toggle purchased (need to make a supabase call)
delete button -- deletes all the items so we can make a new list (needs to make a supabase call)
new item button -- redirect us to the create page
Create Page
form with inputs for qty, name and a submit button
create new items onSubmit (will redirect back to list)
back button (to return to list page)
## To Do List
1. Database Setup
Make your table
Add user_id foreign key relation (default to uid())
Add RLS user_id = uid() for all actions
2. Create Page
Add your form
Write your create function in fetch-utils.js
Add your submit event listener
Grab data using new FormData and send to supabase
Redirect to list page Validation Step: New rows are being added in supabase
3. List Page: List all items
Add a <ul> element
TDD our render function (need a way to differentiate between purchased and unpurchased items)
Add our fetch function in fetch-utils.js
Write a function called displayListItems() : grab all the data from supabase, use our render function to display
On load, call displayListItems() Validation step: you can see rows on the page -- sign in as another user and ensure that you're only seeing authed user's data
4. List Page: Delete Items
Add a delete button
Add delete all items function in fetch-utils.js
Add event listener to call delete function and remove all items from the list
5. List Page: Update Items
Write a function in fetch-utils called updateItem
Add a click event handler to our list items that updates individual items in supabase
call displayListItems()