import AsyncStorage from '@react-native-async-storage/async-storage';

// removeItemValue('myRooms')
// removeItemValue('personalInfo')
// removeItemValue('firstLoad')

async function removeItemValue(key) {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
}

export const deleteRoomData = async (id) => {
    try {
        const currentRooms = await AsyncStorage.getItem('myRooms');
        if (currentRooms !== null) {
            const currentRoomList = JSON.parse(currentRooms);
            currentRoomList.splice(id - 1, 1);
            for (let i = 0; i < currentRoomList.length; i++) {
                currentRoomList[i].id = i + 1;
            }
            await AsyncStorage.setItem('myRooms', JSON.stringify(currentRoomList));
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const fetchRooms = async () => {
    // await removeItemValue('firstLoad');
    try {
        const currentRooms = await AsyncStorage.getItem('myRooms');
        if (currentRooms !== null) {
            return currentRooms;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error); 
        return null;
    }
}

export const fetchPersonalInfo = async () => {
    try {
        const personalInfo = await AsyncStorage.getItem('personalInfo');
        if (personalInfo !== null) {
            return personalInfo;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const addRoom = async (room, roomName, answers, primary, id) => {
    try {
        const currentRooms = await AsyncStorage.getItem('myRooms');
        const icons = {"Bedroom": "bed", "Bathroom": "bath", "Living Room": "tv", "Kitchen": "cutlery", "Stairway": "signal", "Home Exterior/Garage": "car"}
        if (currentRooms !== null && currentRooms !== undefined && currentRooms !== "[]" && currentRooms !== "" && currentRooms !== "null") {
            const currentRoomList = JSON.parse(currentRooms);
            if (id !== undefined) {
                currentRoomList[id - 1] = {"type": room, "name": roomName, "icon": icons[room], "answers": answers, "primary": primary, "id": id};
            } else {
                currentRoomList.push({"type": room, "name": roomName, "icon": icons[room], "answers": answers, "primary": primary, "id": currentRoomList.length + 1});

            }
            const newRooms = JSON.stringify(currentRoomList);
            await AsyncStorage.setItem('myRooms', newRooms);
        } else {
            const newRoom = JSON.stringify([{"type": room, "name": roomName, "icon": icons[room], "answers": answers, "primary": primary, "id": 1}]);
            await AsyncStorage.setItem('myRooms', newRoom);
        }
    } catch (error) {
        console.log(error); 
        return null;
    }
}

