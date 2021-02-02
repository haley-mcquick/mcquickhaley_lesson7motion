while True:
    print(input.acceleration(Dimension.Y))

    if input.acceleration(Dimension.Y) > 5:
        light.show_animation(light.rainbowAnimation, 500)
        music.ba_ding.play_until_done()

