<template>
    <div>
        <b-container>
            <h1>Fill Form</h1>
            <h3>{{ show.name }}</h3>
            <p class="lead">{{ show.description }}</p>

            <b-form @submit.prevent="onSubmit" novalidate>
                <b-form-group
                    v-for="field in show.fields"
                    :key="field.id"
                    :label-for="`field${field.id}`">
                    <template slot="label">
                        {{ field.name }} <span v-if="field.attributes.required" class="text-danger">*</span>
                    </template>

                    <template v-if="field.type === 'text'">
                        <b-form-input
                            :state="!$v.form[`field${field.id}`].$error  && null"
                            v-model="form[`field${field.id}`]"
                            @input="$v.form[`field${field.id}`].$touch()"
                            :id="`field${field.id}`"
                        />
                    </template>

                    <template v-else-if="field.type === 'email'">
                        <b-form-input
                            :state="!$v.form[`field${field.id}`].$error  && null"
                            v-model="form[`field${field.id}`]"
                            @input="$v.form[`field${field.id}`].$touch()"
                            type="email"
                            :id="`field${field.id}`"
                        />
                    </template>

                    <template v-else-if="field.type === 'textarea'">
                        <b-form-textarea
                            :state="!$v.form[`field${field.id}`].$error  && null"
                            v-model="form[`field${field.id}`]"
                            @input="$v.form[`field${field.id}`].$touch()"
                            :rows="3"
                            :id="`field${field.id}`"
                        />
                    </template>

                    <template v-else-if="field.type === 'select'">
                        <b-form-select
                            :state="!$v.form[`field${field.id}`].$error  && null"
                            v-model="form[`field${field.id}`]"
                            @input="$v.form[`field${field.id}`].$touch()"
                            :options="field.attributes.options"
                            :id="`field${field.id}`"
                        />
                    </template>

                    <template v-else>
                        <small class="text-warning">no support for: <strong>{{ field.type }}</strong></small>
                    </template>
                </b-form-group>
                <b-button
                    type="submit"
                    variant="primary">
                    Submit
                </b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },

    async fetch({ store, params }) {
        await store.dispatch('forms/show', params);
    },

    data() {
        return {
            form: {}
        }
    },

    validations() {
        const formValidations = {}

        this.show.fields.forEach(field => {
            const fieldName = `field${field.id}`

            formValidations[fieldName] = {}

            if (field.attributes.required) {
                Object.assign(formValidations[fieldName], { required })
            }

        })

        return {
            form: formValidations
        }
    },

    computed: {
        ...mapState({
            show: state => state.forms.show
        })
    },

    created() {
        const form = {}
        this.show.fields.forEach(field => form[`field${field.id}`] = null)

        this.form = form
    },

    methods: {
        onSubmit(event) {
            this.$v.$touch()

            if (this.$v.$invalid) {
                this.$toast.error('Form is invalid.')
            }

        }
    }
}
</script>

<style scoped>

</style>
