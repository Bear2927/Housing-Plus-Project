import React, { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function PropertyForm ({properties, setProperties, owners, setOwners, setListings}) {


    const [formAddress, setFormAddress] = useState("");
    const [formImage, setFormImage] = useState("");
    const [formBedrooms, setFormBedrooms] = useState("");
    const [formBathrooms, setFormBathrooms] = useState("");
    const [formPrice, setFormPrice] = useState("");
    const [formName, setFormName] = useState("");
    const [formImageUrl, setFormImageUrl] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPhoneNumber, setFormPhoneNumber] = useState("")

    useEffect(() => {
        fetch("/owners")
          .then((res) => res.json())
          .then((owners) => setOwners(owners));
      }, []);

      useEffect(() => {
        fetch("/listings")
          .then((res) => res.json())
          .then((listings) => setListings(listings));
      }, []);

      useEffect(() => {
        fetch("/properties")
          .then((res) => res.json())
          .then((properties) => setProperties(properties));
      }, []);

    
    function handleAddPropertyAndOwner(){
        const newProperty = {
          address: formAddress,
          image_url: formImage,
          bedrooms: formBedrooms,
          bathrooms: formBathrooms,
          price: formPrice
        }

        const newOwner = {
            name: formName,
            image_url: formImageUrl,
            email: formEmail,
            phone_number: formPhoneNumber
        }
        
        const configObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newProperty)
        }

        const configObjOne = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOwner)
        }
        
        fetch("/owners", configObjOne)
                    .then(res => res.json())
                    .then(owner => {setOwners([...owners, owner])
            fetch("/properties", configObj)
                    .then(res => res.json())
                    .then(property =>{
                    setProperties([...properties, property])
                        fetch("/listings", {
                            method: "POST",
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify({owner_id: owner.id, property_id: property.id})
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                                fetch("/properties") 
                                    .then(res => res.json())
                                    .then(properties => setProperties(properties))
                                    fetch("/owners") 
                                        .then(res => res.json())
                                        .then(owners => setOwners(owners))
                })
        });

        setFormImage("")
        setFormAddress("")
        setFormBedrooms("")
        setFormBathrooms("")
        setFormPrice("")
        setFormImageUrl("")
        setFormName("")
        setFormEmail("")
        setFormPhoneNumber("")
    }


    function handleUpdateAddress(e) {
        setFormAddress(e.target.value)
    }
  
    function handleUpdateBedrooms(e) {
        setFormBedrooms(e.target.value)
    }
  
    function handleUpdateBathrooms(e) {
        setFormBathrooms(e.target.value)
    }

    function handleUpdatePrice(e) {
        setFormPrice(e.target.value)
    }
  
    function handleUpdateImage(e) {
        setFormImage(e.target.value)
    }

    function handleUpdateName(e) {
        setFormName(e.target.value)
    }

    function handleUpdateImageUrl(e) {
        setFormImageUrl(e.target.value)
    }

    function handleUpdateEmail(e) {
        setFormEmail(e.target.value)
    }

    function handleUpdatePhoneNumber(e) {
        setFormPhoneNumber(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        handleAddPropertyAndOwner()
    }

    
    return (
        <div className="form_div">
            <h1 className="account1">Add properties for rent</h1>
            <form onSubmit={handleSubmit} className="form">
                <p className="account5">Add a Property</p>
                <h5 className="account">Address</h5>
                <div><TextField className="form_input" onChange={handleUpdateAddress} type="text" value={formAddress} placeholder="property address..."/></div>
                <h5 className="account">Image</h5>
                <div><TextField className="form_input" onChange={handleUpdateImage} type="text" value={formImage} placeholder="property image url..."/></div>
                <h5 className="account">Bedrooms</h5>
                <div><TextField className="form_input" onChange={handleUpdateBedrooms} type="text" value={formBedrooms} placeholder="property bedrooms..."/></div>
                <h5 className="account">Bathrooms</h5>
                <div><TextField className="form_input" onChange={handleUpdateBathrooms} type="text" value={formBathrooms} placeholder="property bathrooms..."/></div>
                <h5 className="account">Price</h5>
                <div><TextField className="form_input" onChange={handleUpdatePrice} type="text" value={formPrice} placeholder="property price..."/></div>
            
            

            <p className="account5">Add the owner for this property</p>
            <h5 className="account">Name</h5>
                <div><TextField className="form_input" onChange={handleUpdateName} type="text" value={formName} placeholder="owner name..."/></div>
                <h5 className="account">Image</h5>
                <div><TextField className="form_input" onChange={handleUpdateImageUrl} type="text" value={formImageUrl} placeholder="owner image url..."/></div>
                <h5 className="account">Email Address</h5>
                <div><TextField className="form_input" onChange={handleUpdateEmail} type="text" value={formEmail} placeholder="owner email address..."/></div>
                <h5 className="account">Phone Number</h5>
                <div><TextField className="form_input" onChange={handleUpdatePhoneNumber} type="text" value={formPhoneNumber} placeholder="owner phone number..."/></div>
                <div><Button variant="contained" type="submit">SUBMIT</Button></div>
            </form>
        </div>
    )
}

export default PropertyForm;