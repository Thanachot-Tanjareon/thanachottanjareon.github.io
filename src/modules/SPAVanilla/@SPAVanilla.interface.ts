export interface SPAInterface {
    app: HTMLElement
    routes: Routes
    SPAFeatures: (callback: MutationCallback) => void
}

export interface Routes {
    [path: string]: {
        title: string
        pageLayout: string
    }
}