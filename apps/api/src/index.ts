import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanDeleteUser = ability.can('delete', 'User')

console.log(userCanDeleteUser)
