import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import { Hero, Features } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ShopPage } from './components/ShopPage';
import { Footer } from './components/Footer';
import { OrderPage } from './components/OrderPage';
import { AboutPage } from './components/AboutPage';
import { LegalPage } from './components/LegalPage';
import { OrderProvider } from './context/OrderContext';
import { ViewState, Language } from './types';

export function App() {
  const getInitialState = () => {
    if (typeof window === 'undefined') return { view: 'landing' as ViewState, plan: 'Tapnow Pro Standard' };
    
    const path = window.location.pathname.toLowerCase();
    
    let view: ViewState = 'landing';
    let plan = 'Tapnow Pro Standard';

    if (path.startsWith('/shop')) view = 'shop';
    else if (path.startsWith('/about')) view = 'about';
    else if (path.startsWith('/privacy')) view = 'privacy';
    else if (path.startsWith('/terms')) view = 'terms';
    else if (path.startsWith('/order')) {
        view = 'order';
        if (path.includes('gold')) plan = 'Tapnow Pro Gold';
        else if (path.includes('custom')) plan = 'Tapnow Pro Custom';
        else if (path.includes('reviews')) plan = 'Tapnow Reviews';
    }

    return { view, plan };
  };

  const initialState = getInitialState();

  const [currentView, setCurrentView] = useState<ViewState>(initialState.view);
  const [language, setLanguage] = useState<Language>('EN');
  const [selectedPlan, setSelectedPlan] = useState<string>(initialState.plan);

  useEffect(() => {
    const handlePopState = () => {
        const state = getInitialState();
        setCurrentView(state.view);
        if (state.view === 'order') {
            setSelectedPlan(state.plan);
        }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const newPath = view === 'landing' ? '/' : `/${view}`;
    if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
    }
  };

  const handleOrder = (planName: string) => {
    setSelectedPlan(planName);
    setCurrentView('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    let suffix = '/standard';
    if (planName.includes('Gold')) suffix = '/gold';
    else if (planName.includes('Custom')) suffix = '/custom';
    else if (planName.includes('Reviews')) suffix = '/reviews';

    const newPath = `/order${suffix}`;
    if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
    }
  };

  const getCanonicalUrl = () => {
    if (currentView === 'landing') {
      return 'https://www.tapnow.ma/';
    }
    return `https://www.tapnow.ma/${currentView}`;
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href={getCanonicalUrl()} />
      </Helmet>
      <OrderProvider>
        <div className="min-h-screen bg-[#F8FAFC] w-full max-w-[100vw] overflow-x-hidden relative flex flex-col">
        <Navbar 
            currentView={currentView}
            onNavigate={handleNavigate}
            language={language}
            setLanguage={setLanguage}
            onOrder={handleOrder}
        />
        <main className="w-full max-w-full flex-grow">
            {currentView === 'order' ? (
                <OrderPage 
                    initialPlan={selectedPlan}
                    onBack={() => handleNavigate('landing')}
                    onPlanChange={(plan) => {
                        setSelectedPlan(plan);
                        let suffix = '/standard';
                        if (plan.includes('Gold')) suffix = '/gold';
                        else if (plan.includes('Custom')) suffix = '/custom';
                        else if (plan.includes('Reviews')) suffix = '/reviews';
                        window.history.replaceState({}, '', `/order${suffix}`);
                    }}
                    language={language}
                />
            ) : currentView === 'about' ? (
                <AboutPage language={language} />
            ) : currentView === 'privacy' ? (
                <LegalPage type="privacy" language={language} />
            ) : currentView === 'terms' ? (
                <LegalPage type="terms" language={language} />
            ) : currentView === 'shop' ? (
                <ShopPage language={language} onOrder={handleOrder} />
            ) : (
                <>
                    <Hero onNavigate={handleNavigate} language={language} />
                    <Features language={language} />
                    <ProductGrid id="pricing" onOrderClick={handleOrder} language={language} />
                </>
            )}
        </main>
        <Footer language={language} onNavigate={handleNavigate} />
        </div>
    </OrderProvider>
    </HelmetProvider>
  );
}