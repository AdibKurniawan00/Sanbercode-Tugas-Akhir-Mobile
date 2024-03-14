describe("Welcome Page",()=>{
    it("add user success", async()=>{
        await $("id:com.fghilmany.dietmealapp:id/et_name").addValue("sumirnop")
        await $("id:com.fghilmany.dietmealapp:id/et_weight").addValue("62")
        await $("id:com.fghilmany.dietmealapp:id/et_height").addValue("178")
        await $("id:com.fghilmany.dietmealapp:id/rb_male").click()
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]').click()
        await $("id:com.fghilmany.dietmealapp:id/rb_rest").click()
        await $("id:com.fghilmany.dietmealapp:id/bt_finish").click()
        await expect($('(//android.widget.ImageView[@resource-id="com.fghilmany.dietmealapp:id/navigation_bar_item_icon_view"])[1]')).toBeDisplayed()
    })
})