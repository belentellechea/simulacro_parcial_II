
export const getAllPlanets = async() => {
    try {
        const response = await fetch (`http://192.168.68.106:8000/planets`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo planetas', error)
    }
}

export const getPlanetById = async(id) => {
    try {
        const response = await fetch (`http://192.168.68.106:8000/planets/${id}`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data;   
    } catch (error) {
        console.log('Error obteniendo planeta por id', error)
    }
}

export const addPlanet = async(newPlanet) => {
    try {
        const response = await fetch (`http://192.168.68.106:8000/planets`, {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPlanet),
        }) 
        const data = await response.json();
        return data;   
    } catch (error) {
        console.log('Error añadiendo nuevo planeta', error)
    }
}

export const deletePlanet = async(id) => {
    try {
        const response = await fetch (`http://192.168.68.106:8000/planets/${id}`, {
            method: "DELETE"
        }) 
        const data = await response.json();
        return data;   
    } catch (error) {
        console.log('Error eliminando el planeta', error)
    }
}

export const editPlanet = async(id, editedPlanet) => {
    try {
        const response = await fetch (`http://192.168.68.106:8000/planets/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedPlanet),
        }) 
        const data = await response.json();
        return data;   
    } catch (error) {
        console.log('Error editando planeta', error)
    }
}





