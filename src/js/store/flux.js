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
				const store = getStore();

				fetch(`https://playground.4geeks.com/contact/agendas/erik/contacts/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updateContact)
				}).then(resp => resp.json()).then((respJson) => {
							
					const updateContacts = store.contacts.map(contact => contact.id === parseInt(id) ? respJson : contact);
					setStore({ contacts: updateContacts});
					navigate("/")
				})
			}




		}
	}
}


export default getState;
