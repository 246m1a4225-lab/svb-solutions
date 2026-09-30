/**
 * SVB SOLUTION - Main Client JavaScript
 * Interactive Features, Workflow Simulator, ROI Calculator, Form Validation & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Sticky Navigation & Active Link Scroll Spy ---
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollY = window.pageYOffset;

    // Header styling on scroll
    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollY > 500) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll spy for navigation
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Back to top click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Tabbed Solution Architecture Switcher ---
  const solutionTabBtns = document.querySelectorAll('.solution-nav-tabs .tab-btn');
  const solutionTabPanels = document.querySelectorAll('.solution-tab-panels .tab-panel');

  solutionTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      solutionTabBtns.forEach(b => b.classList.remove('active'));
      solutionTabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-panel-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // --- Interactive Industry Automation Simulator (Sandbox) ---
  const sandboxBtns = document.querySelectorAll('.sandbox-btn');
  const industryData = {
    retail: {
      industry: 'Retail & E-Commerce',
      steps: [
        { badge: 'Step 1: Ingestion', title: 'Order & Return Alerts', sub: 'Syncs Shopify, POS & marketplace feeds' },
        { badge: 'Step 2: AI Engine', title: 'Inventory Reorder AI', sub: 'Calculates demand forecasting automatically' },
        { badge: 'Step 3: Action', title: 'Automated Supplier POs', sub: 'Generates purchase orders with zero human lag' },
        { badge: 'Step 4: Customer', title: 'Delivery Tracking AI', sub: 'Sends instant SMS/Email order status updates' }
      ],
      impact: 'Eliminates stockout errors and cuts order processing turnaround by 75%.'
    },
    services: {
      industry: 'Professional Services & Agencies',
      steps: [
        { badge: 'Step 1: Ingestion', title: 'Lead Intake & Inquiry', sub: 'Gathers client requirements via web/forms' },
        { badge: 'Step 2: AI Engine', title: 'Intelligent Proposal Gen', sub: 'Assembles custom scopes and cost sheets' },
        { badge: 'Step 3: Action', title: 'Calendar & Contract Sync', sub: 'Routes e-signatures and schedules onboarding' },
        { badge: 'Step 4: Insights', title: 'Utilization Tracking', sub: 'Forecasts billable hours and team capacity' }
      ],
      impact: 'Reduces client onboarding cycle from 4 days to under 30 minutes.'
    },
    healthcare: {
      industry: 'Clinics & Healthcare Practices',
      steps: [
        { badge: 'Step 1: Ingestion', title: 'Appointment Booking', sub: 'Captures 24/7 patient schedule requests' },
        { badge: 'Step 2: AI Engine', title: 'Automated Reminders', sub: 'Sends HIPAA-compliant SMS confirmations' },
        { badge: 'Step 3: Action', title: 'Insurance Pre-check', sub: 'Validates basic eligibility before visit' },
        { badge: 'Step 4: Insights', title: 'Follow-up Care Triggers', sub: 'Schedules follow-ups and routine care' }
      ],
      impact: 'Reduces appointment no-shows by up to 60% without extra administrative staff.'
    },
    logistics: {
      industry: 'Logistics & Supply Chain',
      steps: [
        { badge: 'Step 1: Ingestion', title: 'Waybill & Invoice Scan', sub: 'OCR extracts metadata from PDFs and slips' },
        { badge: 'Step 2: AI Engine', title: 'Route & Load Matching', sub: 'Optimizes consignment dispatch order' },
        { badge: 'Step 3: Action', title: 'Driver Dispatch Alert', sub: 'Pushes instructions directly to mobile apps' },
        { badge: 'Step 4: Insights', title: 'Proof-of-Delivery Auto-Log', sub: 'Closes tickets and generates instant billing' }
      ],
      impact: 'Cuts manual paperwork handling by 80% while accelerating cash collection cycles.'
    }
  };

  const sandboxContainer = document.getElementById('sandboxFlowContainer');
  const sandboxImpactText = document.getElementById('sandboxImpactText');

  const renderSandboxFlow = (key) => {
    const data = industryData[key] || industryData.retail;
    if (!sandboxContainer) return;

    let html = '<div class="flow-steps-chain">';
    data.steps.forEach((step, idx) => {
      html += `
        <div class="flow-node-box">
          <div class="flow-node-badge">${step.badge}</div>
          <div class="flow-node-title">${step.title}</div>
          <div class="flow-node-sub">${step.sub}</div>
        </div>
      `;
      if (idx < data.steps.length - 1) {
        html += `
          <div class="flow-arrow-separator">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </div>
        `;
      }
    });
    html += '</div>';

    sandboxContainer.innerHTML = html;
    if (sandboxImpactText) {
      sandboxImpactText.textContent = `Industry Impact: ${data.impact}`;
    }
  };

  sandboxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sandboxBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const indKey = btn.getAttribute('data-industry');
      renderSandboxFlow(indKey);
    });
  });

  // Render initial sandbox
  renderSandboxFlow('retail');

  // --- Interactive SMB Time & Cost Savings Estimator ---
  const teamSizeSlider = document.getElementById('teamSizeSlider');
  const manualHoursSlider = document.getElementById('manualHoursSlider');
  const teamSizeVal = document.getElementById('teamSizeVal');
  const manualHoursVal = document.getElementById('manualHoursVal');
  const resHoursSaved = document.getElementById('resHoursSaved');
  const resMonthlyCost = document.getElementById('resMonthlyCost');
  const resAnnualCost = document.getElementById('resAnnualCost');

  const updateCalculations = () => {
    if (!teamSizeSlider || !manualHoursSlider) return;

    const teamSize = parseInt(teamSizeSlider.value, 10);
    const manualHoursPerEmployee = parseInt(manualHoursSlider.value, 10);

    if (teamSizeVal) teamSizeVal.textContent = `${teamSize} ${teamSize === 1 ? 'person' : 'team members'}`;
    if (manualHoursVal) manualHoursVal.textContent = `${manualHoursPerEmployee} hrs / week`;

    // Calculation Model:
    // SVB AI automates approx 65% of repetitive routine tasks
    const totalWeeklyHours = teamSize * manualHoursPerEmployee;
    const weeklyHoursSaved = Math.round(totalWeeklyHours * 0.65);
    const monthlyHoursSaved = weeklyHoursSaved * 4;

    // Estimated standard average SMB cost per employee hour = $28/hr
    const hourlyRate = 28;
    const monthlyValueSaved = monthlyHoursSaved * hourlyRate;
    const annualValueSaved = monthlyValueSaved * 12;

    if (resHoursSaved) resHoursSaved.textContent = `${monthlyHoursSaved.toLocaleString()} hrs / mo`;
    if (resMonthlyCost) resMonthlyCost.textContent = `$${monthlyValueSaved.toLocaleString()}`;
    if (resAnnualCost) resAnnualCost.textContent = `$${annualValueSaved.toLocaleString()}`;
  };

  teamSizeSlider?.addEventListener('input', updateCalculations);
  manualHoursSlider?.addEventListener('input', updateCalculations);
  updateCalculations();

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- Demo Booking Modal System ---
  const demoModal = document.getElementById('demoModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal="demoModal"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  const openDemoModal = (prefillAutomation = '') => {
    if (!demoModal) return;
    demoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const firstInput = demoModal.querySelector('input');
    firstInput?.focus();

    if (prefillAutomation) {
      const select = demoModal.querySelector('select[name="businessType"]');
      if (select) select.value = prefillAutomation;
    }
  };

  const closeDemoModal = () => {
    if (!demoModal) return;
    demoModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDemoModal();
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDemoModal();
    });
  });

  demoModal?.addEventListener('click', (e) => {
    if (e.target === demoModal) {
      closeDemoModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal?.classList.contains('active')) {
      closeDemoModal();
    }
  });

  // --- Toast Notification Helper ---
  const showToast = (message, type = 'success') => {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    toast.innerHTML = `
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // --- Form Handling & Validation (Main Contact & Modal Forms) ---
  const handleFormSubmit = (formElement, isModal = false) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = formElement.querySelector('input[name="fullName"]');
      const emailInput = formElement.querySelector('input[name="email"]');
      const businessNameInput = formElement.querySelector('input[name="businessName"]');
      const phoneInput = formElement.querySelector('input[name="phone"]');
      const submitBtn = formElement.querySelector('button[type="submit"]');

      // Basic client-side validation
      if (!nameInput?.value.trim() || !emailInput?.value.trim() || !businessNameInput?.value.trim()) {
        showToast('Please fill in all required fields (Name, Business Name, Email).', 'error');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      // Simulate loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg style="animation: spin 1s linear infinite; display: inline-block; margin-right: 8px;" width="18" height="18" fill="none" viewBox="0 0 24 24">
          <circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path style="opacity: 0.75;" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Scheduling Demo...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formElement.reset();

        if (isModal) {
          closeDemoModal();
        }

        // Show Confirmation Dialog
        const successModal = document.getElementById('successModal');
        if (successModal) {
          const clientNameSpan = document.getElementById('confirmedClientName');
          if (clientNameSpan) clientNameSpan.textContent = nameInput.value.trim();
          successModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        } else {
          showToast('Thank you! Your demo request has been received. Our team will contact you shortly.', 'success');
        }
      }, 900);
    });
  };

  const mainContactForm = document.getElementById('mainContactForm');
  const modalDemoForm = document.getElementById('modalDemoForm');

  if (mainContactForm) handleFormSubmit(mainContactForm, false);
  if (modalDemoForm) handleFormSubmit(modalDemoForm, true);

  // Close Success Modal
  const successModal = document.getElementById('successModal');
  const closeSuccessBtns = document.querySelectorAll('[data-close-success]');
  closeSuccessBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      successModal?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
