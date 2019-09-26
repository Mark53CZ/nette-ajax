import { AxiosRequestConfig } from 'axios'
import { RequestPayloadData, PayloadIncluded } from 'types'

export type Extensions = {
	[key: string]: Extension
}

export type Extension = AxiosRequestConfig & ExtensionCallbacks

export type ExtensionCallbacks = {
	onInit?: (extension?: Extension) => void
	onBefore?: (payload?: PayloadIncluded) => void
	onStart?: (payload?: PayloadIncluded) => void
	onSuccess?: (payload?: RequestPayloadData) => void
	onComplete?: (payload?: RequestPayloadData) => void
	onError?: (err?: string | object) => void
}
