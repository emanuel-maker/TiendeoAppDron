export default class Validator{

    validatePerimeter(perimeter){
        return /^\d\s\d$/.test(perimeter);
    }

    validatePosition(position,perimeter){
        return /^(\d\s\d\s)(n|e|s|o)$/.test(position) && position[0] <= perimeter[0] && position[2] <= perimeter[2];
    }

    validateMovement(movement){
        return /^(m|l|r)*$/.test(movement);
    }
}