<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Napp</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Menu" right>
                    <b-dropdown-item
                        v-for="(item, index) in navigationItems"
                        :key="index"
                        :to="item.fallback_uri">
                        {{ item.title }}
                    </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item
                    v-if="availableAccounts.length > 1"
                    to="/select-account">
                    Switch Account
                </b-nav-item>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState({
            navigationItems: state => state.config.config.navigation
        }),
        ...mapGetters('auth', ['availableAccounts'])
    }
}
</script>
