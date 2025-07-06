import React from 'react';
import { useTranslation } from 'react-i18next';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const MissionStatementSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-brand-secondary/40 py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center bg-brand-light/70 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl border border-neutral-200/50">
                    <InformationCircleIcon className="h-12 w-12 text-brand-primary mx-auto mb-6" aria-hidden="true" />
                    <blockquote className="text-2xl sm:text-3xl font-semibold text-neutral-800 italic mb-8" style={{ textWrap: 'balance' }}>
                        <p>{t('homePage.missionQuote')}</p>
                    </blockquote>
                    <div 
                        className="text-neutral-700 text-base sm:text-lg leading-relaxed text-start sm:text-center"
                        style={{ textWrap: 'balance' }}
                        dangerouslySetInnerHTML={{ __html: t('homePage.missionExplanation') }}
                    >
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionStatementSection;
