import { api } from './api-client'

export async function declineInvite(inviteId: string) {
  await api.delete(`invites/${inviteId}/reject`)
}
