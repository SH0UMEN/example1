<template>
    <main-modal class="order-modal"
                :show="$store.state.LK.orderModalShown"
                @closed="close"
                name="order-modal">

        <stepper :steps="steps" title="Оформление заказа">
            <order1></order1>
            <order2></order2>
            <order3></order3>
        </stepper>
    </main-modal>
</template>

<script>
    import Stepper from "../../../components/common/ui/Stepper"
    import MainModal from "../../../components/common/ui/MainModal"
    import Order1 from "../../../components/lk/steppers/Order1"
    import Order2 from "../../../components/lk/steppers/Order2"
    import Order3 from "../../../components/lk/steppers/Order3"

    export default {
        name: "OrderModal",
        components: {
            Stepper,
            Order1,
            Order2,
            Order3,
            MainModal
        },
        data() {
            return {
                steps: [
                    {
                        title: '1 шаг',
                        callback: ()=>{
                            this.$store.commit("clearOrderSecondSlide");
                        }
                    },
                    {
                        title: '2 шаг',
                    },
                    {
                        title: 'Завершение'
                    }
                ],
            }
        },
        methods: {
            close() {
                this.$store.commit('closeOrderModal');
            }
            // createOrder() {
            //     let props = {
            //         order_type: this.resultData.type,
            //         social_type: "instagram",
            //         url: this.instagram,
            //         count: this.quantity,
            //         price: this.quantity*this.priceForOne
            //     };
            //     this.$store.dispatch("createOrder", props).then(()=>{
            //         this.showInfo = true;
            //     })
            // },
        }
    }
</script>

<style lang="sass">
    @import "../../../assets/sass/lk/modals/order-modal"
</style>