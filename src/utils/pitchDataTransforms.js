// Utility functions to transform startup data between backend and frontend formats

export const transformStartupToRedux = (startup) => {
  if (!startup) return {};

  const pitchData = {};

  // Transform basic data
  if (startup.pitch?.basics) {
    const basics = startup.pitch.basics;
    pitchData.basic = {
      textData: {
        companyname: basics.companyname || '',
        tagline: basics.description || '',
        city: basics.address || '',
        website: basics.links?.website || '',
        twitter: basics.links?.twitter || '',
        linkedin: basics.links?.linkedin || '',
        instagram: basics.links?.instagram || '',
        youtube: basics.links?.youtube || '',
        facebook: basics.links?.facebook || '',
        blog: basics.links?.blog || ''
      }
    };
  }

  // Transform highlights
  if (startup.pitch?.highlights) {
    const highlights = startup.pitch.highlights;
    const highlightsData = {};
    highlights.forEach((highlight, index) => {
      highlightsData[index + 1] = highlight;
    });
    pitchData.highlights = {
      textData: highlightsData
    };
  }

  // Transform pitch content
  if (startup.pitch?.pitch) {
    pitchData.pitch = {
      textData: {
        pitch_title: startup.pitch.pitch.pitch_title || '',
        htmldata: startup.pitch.pitch.htmlData || ''
      }
    };
  }

  // Transform contract data
  if (startup.terms?.contract) {
    const contract = startup.terms.contract;
    pitchData.contract = {
      textData: {
        contractName: contract.contractName || '',
        valuation_cap: contract.valuation_cap || '',
        discount: contract.discount || '',
        interest_rate: contract.interest_rate || '',
        payback: contract.payback || '',
        investor_revenue_per: contract.investor_revenue_per || '',
        simple_interest_rate: contract.simple_interest_rate || '',
        repayment: contract.repayment || '',
        loan_term: contract.loan_term || '',
        pre_money_valuation: contract.pre_money_valuation || '',
        investor_advise: contract.investor_advise || '',
        terms_to_vip: contract.terms_to_vip || ''
      }
    };
  }

  // Transform perks
  if (startup.terms?.perks) {
    const perks = startup.terms.perks;
    const perksData = {};
    perks.forEach((perk, index) => {
      perksData[index + 1] = perk.toReceive || '';
    });
    pitchData.perks = {
      textData: perksData
    };
  }

  // Transform funding goals
  if (startup.raise?.fundingGoals) {
    const funding = startup.raise.fundingGoals;
    pitchData.fundingGoals = {
      textData: {
        maximum_raise: funding.maximumRaise || '',
        minimum_raise: funding.minimumRaise || ''
      }
    };
  }

  // Transform discoverability
  if (startup.raise?.discoverability) {
    const disc = startup.raise.discoverability;
    pitchData.discoverability = {
      textData: {
        access: disc.access || '',
        venturlistURL: Array.isArray(disc.venturelistURL) ? disc.venturelistURL[0] || '' : disc.venturelistURL || ''
      }
    };
  }

  // Transform extra settings
  if (startup.raise?.extra) {
    const extra = startup.raise.extra;
    pitchData.extra = {
      textData: {
        investor_massage: extra.investor_massage || '',
        google_anlytics: extra.anlytics?.google_anlytics || '',
        google_tag_manager: extra.anlytics?.google_tag_manager || '',
        pixel_id: extra.anlytics?.facebookTracking?.pixel_id || '',
        conversion_token: extra.anlytics?.facebookTracking?.conversion_token || '',
        registered_Domain: extra.anlytics?.facebookTracking?.registered_Domain || '',
        test_event_code: extra.anlytics?.facebookTracking?.test_event_code || ''
      }
    };
  }

  // Initialize empty sections if they don't exist
  const sections = ['basic', 'highlights', 'pitch', 'contract', 'perks', 'fundingGoals', 'discoverability', 'extra', 'teams', 'featuredInvestor'];
  sections.forEach(section => {
    if (!pitchData[section]) {
      pitchData[section] = { textData: {} };
    }
  });

  return pitchData;
};

export const validatePitchData = (pitchData) => {
  const errors = [];
  
  // Check required fields
  if (!pitchData.basic?.textData?.companyname) {
    errors.push('Company name is required');
  }
  
  if (!pitchData.basic?.textData?.tagline) {
    errors.push('Company tagline is required');
  }
  
  // Check highlights (at least 2)
  const highlights = Object.values(pitchData.highlights?.textData || {}).filter(h => h && h.trim());
  if (highlights.length < 2) {
    errors.push('At least 2 highlights are required');
  }
  
  return errors;
};