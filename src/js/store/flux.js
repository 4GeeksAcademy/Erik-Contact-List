const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			
			getUser: () => {
				fetch ( 'https://playground.4geeks.com/contact/agendas/erik')
				.then(resp => resp.json())
				.then(respJson => {
					const serverContacts = respJson.contacts
					setStore({  contacts: serverContacts })
				})
				
			},
		 handleAddContact: async (contact) => {
			try {
				const resp = await fetch('https://playground.4geeks.com/contact/agendas/erik/contacts',{
					method: 'POST',
					headers: {
						'Content-Type' : 'application/json'

					},
					body: JSON.stringify(contact)
				})
				if (!resp.ok) throw new Error('Error adding contact')
					if (resp.status != 201) throw new Error('Error adding contact')
						const data = await resp.json()
						console.log(data);
	
					} catch (error) {
						console.error(error)
	
					}
				}
			 }
		}
	}

export default getState;
