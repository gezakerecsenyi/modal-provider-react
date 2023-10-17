# `modal-provider-react`
**Open and populate modals from anywhere in your React DOM**

### Usage

 - Initialize using the `<ModalProvider>` wrapper.

```tsx
// index.tsx

import ModalProvider from 'modal-provider-react';

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <ModalProvider>
                {/* rest of your app here */}
            </ModalProvider>
        </React.StrictMode>
    );
```

 - Create your modal components, accepting props of type `{ data }: ModalProps<T>` (with `T` the user-defined type of the data you'll provide to your modal).
```tsx
// MyAuthModal.tsx

// modal-provider-react comes with a built-in <FormattedModal>, but you can use your own too
import { FormattedModal, ModalProps } from 'modal-provider-react';

export default function MyAuthModal({ data }: ModalProps<MyUserType>) {
    return (
        <FormattedModal className='auth'>
            <h1>Hi, {data.displayName}</h1>
        </FormattedModal>
    );
}
```

 - Declare your modal to the `ModalProvider`.

```tsx
// index.tsx

import ModalProvider, { UseModal } from 'modal-provider-react';

createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <ModalProvider>
                <UseModal name='auth'>
                    <MyAuthModal />
                </UseModal>
                
                {/* rest of your app here */}
            </ModalProvider>
        </React.StrictMode>
    );
```

 - Whenever you wish to launch a modal or close the currently-active modal, use the `useModal` hook.

```tsx
// Home.tsx

import { useModal } from 'modal-provider-react';

export default function Home() {
    const {
        launchModal,
        clearModal
    } = useModal();

    const currentUser: MyUserType = {
        displayName: 'John Smith',
        email: 'john@example.com',
    };

    return (
        <div className='home-page'>
            <button
                className='user-settings'
                onClick={() => launchModal('auth', currentUser)}
            >
                My settings
            </button>
        </div>
    );
}
```