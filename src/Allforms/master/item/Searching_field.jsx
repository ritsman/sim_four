import React from 'react'
import  { useEffect } from 'react';
import { Form, useLoaderData,  useNavigation, useSubmit } from 'react-router-dom';


const Searching_field = () => {
    const { contacts: initialContacts = [], q } = useLoaderData() || {};
   
    const navigation = useNavigation();
     const submitt = useSubmit();
    if (!initialContacts) {
        return <div>Loading...</div>;
      } 
    const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has("q");
    useEffect(() => {
      document.getElementById("q").value = q;
    }, [q]);
    const handleSubmitt = (e) => {
      e.preventDefault();
      const formDataa = new FormData(e.target);
      const searchQuery = formDataa.get("q");
     
      submitt({ q: searchQuery });
    };
    const Contacts = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
      { id: 4, name: "Bob Brown" },
      { id: 5, name: "Emily Davis" }
    ];

    

  return (
    <>
   <div id="sidebar">
        {/* <h1>React Router Contacts</h1> */}
        <div>
          {/* Search form */}
          <Form id="search-form" role="search" onSubmit={handleSubmitt}>
            <input
              id="q"
              className={searching ? "loading" : ""}
              placeholder="Search contacts"
              name="q"
            />
            {/* Display spinner while searching */}
            {searching && <div id="search-spinner" aria-hidden />}
            <button type="submit">Search</button>
          </Form>
        </div>
        {/* Display list of contacts */}
        {/* <ul>
          {Contacts.map((contacts) => (
            <li key={contacts.id}>{contacts.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
   
  
  
}

export default Searching_field
