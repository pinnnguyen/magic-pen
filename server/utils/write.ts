import type { RequestSubmitGPT } from '~/server/types'

export function writeScripts(request: Partial<RequestSubmitGPT>) {
  return `I want you to act as a ${request.role}. 
    You will ${request.wantWrite} about "${request.text}".`
}
