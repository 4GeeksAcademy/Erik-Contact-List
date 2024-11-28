const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				['Anna']
			]
		},
		actions: {
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
			}
		}
	};

export default getState;
