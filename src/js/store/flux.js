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
				addContact: (contact) => {
				const store = getStore();
				const contacts = store.contacts;
				const newContacts = [...contacts, contact] 
				setStore({  contacts: newContacts })
			}







			}
		}
	};

export default getState;
