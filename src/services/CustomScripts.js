'use client'
import { getPageName, initAnimations } from '@/utils/AnimationFunctions';
import Script from 'next/script';
import React from 'react'

export const CustomScripts = () => {
    const onReadyScript = () => {
        if (!document.body.classList.contains("first-load-done") && ['home'].includes(getPageName())) initAnimations();
    }

    return (
        <>
            <Script type="module" rel="modulepreload" src="/assets/loader.js" />
            <Script onReady={onReadyScript} type="module" rel="modulepreload" src="/assets/app2.js" />
            <Script type="module" rel="modulepreload" src="/assets/product-link-color.js" />
            <Script type="module" rel="modulepreload" src="/assets/pjax.js" />
            <Script type="module" rel="modulepreload" src="/assets/data-set-get.js" />
            <Script type="module" rel="modulepreload" src="/assets/screen-size.js" />
            <Script type="module" rel="modulepreload" src="/assets/navigation.js" />
            <Script type="module" rel="modulepreload" src="/assets/product-content.js" />
            <Script type="module" rel="modulepreload" src="/assets/cancel-product.js" />
            <Script type="module" rel="modulepreload" src="/assets/form-cart.js" />
            <Script type="module" rel="modulepreload" src="/assets/form-sign-in.js" />
            <Script type="module" rel="modulepreload" src="/assets/forms.js" />
            <Script type="module" rel="modulepreload" src="/assets/collections.js" />
            <Script type="module" rel="modulepreload" src="/assets/filter-products.js" />

            <Script type="module" src="/assets/loader.js"></Script>
            <Script onReady={onReadyScript} type="module" src="/assets/app2.js"></Script>
            <Script type="module" src="/assets/product-content.js"></Script>
            <Script type="module" src="/assets/cancel-product.js"></Script>
            <Script type="module" src="/assets/form-cart.js"></Script>
            <Script type="module" src="/assets/form-sign-in.js"></Script>
            <Script type="module" src="/assets/forms.js"></Script>
            <Script type="module" src="/assets/collections.js"></Script>
            <Script type="module" src="/assets/filter-products.js"></Script>
        </>
    )
}
export default CustomScripts;