
function distanceFromHqInBlocks(n) {
    if (n < 42) {
        return 42 - n
    } else {
        return n - 42
    }
}

function distanceFromHqInFeet(n) {
    return distanceFromHqInBlocks(n) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264
    } else {
        return (end - start) * 264
    }
}

function calculatesFarePrice(start, end) {
    const destinationInFeet = distanceTravelledInFeet(start, end)
    if (destinationInFeet <= 400) {
        return 0
    } else if (destinationInFeet > 400 && destinationInFeet < 2500) {
        if (destinationInFeet > 2000) {
            return 25
        } else {
            return (destinationInFeet - 400) * 0.02
        }
    } else if (destinationInFeet > 2500) {
        return 'cannot travel that far'
    }
}
