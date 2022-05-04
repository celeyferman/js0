class user {
    constructor(userId, floor, room, equipmentId) {
        this.userId = userId;
        this.floor = floor;
        this.room = room;
        this.equipmentId = equipmentId;
    }
}
class equipment {
    constructor(equipmentId, floor, room, userId) {
        this.equipmentId = equipmentId;
        this.floor = floor;
        this.room = room;
        this.userId = userId;
    }
}
function searchByUserId(userId) {
    let user = building.users.find(userHandler => userHandler.userId===userId);
    if (user) {
        console.log(userId+" is in the "+user.room+" in floor "+user.floor);
        return(userId+" is in the "+user.room+" in floor "+user.floor)
    } else {
        console.log(userId+" was not found");
        return(userId+" was not found");
    }
}
function searchByEquipmentId(equipmentId) {
    let equipment = building.equipments.find(equipmentHandler => equipmentHandler.equipmentId===equipmentId);
    if (equipment) {
        console.log(equipmentId+" is in the "+equipment.room+" in floor "+equipment.floor+"assigned to user "+equipment.userId);
        return(equipmentId+" is in the "+equipment.room+" in floor "+equipment.floor+"assigned to user "+equipment.userId);
    } else {
        console.log(equipmentId+" was not found");
        return(equipmentId+" was not found");
    }
}
function memoize(fn) {
    let cache = {};
    return (cacheKey) => {
        if (cacheKey in cache) {
            return cache[cacheKey];
        } else {
            let result = fn(cacheKey);
            cache[cacheKey] = result;
            return result;
        }
    };
}
const user1 = new user(1, 1, "Reception", 1);
const equip1 = new equipment(1, 1, "Reception", 1);
  
const user2 = new user(2, 2, "Library", 2);
const equip2 = new equipment(2, 2, "Library", 2);
  
const user3= new user(3, 2, "Library", 3);
const equip3 = new equipment(3, 2, "Library", 3);
  
const building = {
    users: [user1, user2, user3],
    equipments: [equip1, equip2, equip3],
}
  
const memorizeSearchByUser = memoize(searchByUserId(1));
const memorizeSearchByUser2 = memoize(searchByUserId(2));
const memorizeSearchByEquip = memoize(searchByEquipmentId(1));
const memorizeSearchByEquip2 = memoize(searchByEquipmentId(3));
  