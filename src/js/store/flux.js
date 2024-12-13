const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {

			getUser: () => {
				fetch('https://playground.4geeks.com/contact/agendas/erik')
					.then(resp => resp.json())
					.then(respJson => {
						const serverContacts = respJson.contacts
						setStore({ contacts: serverContacts })
					})

			},

			handleAddContact: async (formData, navigate) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/erik/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'

						},
						body: JSON.stringify(formData)
					})
					if (!resp.ok) throw new Error('Error adding contact')
					if (resp.status != 201) throw new Error('Error adding contact')
					const data = await resp.json()
					console.log(data);
					getActions().getUser()
					navigate("/")

				} catch (error) {
					console.error(error)

				}
			},

			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/erik/contacts/${id}`, {
					method: "DELETE",

				})


					.then(resp => {
						resp.json()
					})

					.then(() => {
						const store = getStore();
						const deleteContacts = store.contacts.filter(contacts => contacts.id !== id);
						setStore({ contacts: deleteContacts })

					})


			},
			
			updateContact: (id, updateContact) => {
				console.log("Updating contact with ID:", id);
				console.log("Data being sent:", updateContact);
				fetch(`https://playground.4geeks.com/contact/agendas/erik/contacts/${id}`, {
				  method: 'PUT',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(updateContact),
				})
				  .then((resp) => {
					if (!resp.ok) {
					  throw new Error('Error updating contact');
					}
					return resp.json();
				  })
				  .then((respJson) => {
					console.log("Server response:", respJson);
					const store = getStore();
					const updatedContacts = store.contacts.map((contact) =>
					  contact.id === parseInt(id) ? { ...contact, ...updateContact } : contact
					);
					setStore({ contacts: updatedContacts });
				  })
				  .catch((error) => console.error('Error en la actualización del contacto:', error));
			  },
			  
			




		}
	}
}


export default getState;
