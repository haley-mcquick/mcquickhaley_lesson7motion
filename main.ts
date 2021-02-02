while (true) {
    console.log(input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) > 5) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.baDing.playUntilDone()
    }
    
}
