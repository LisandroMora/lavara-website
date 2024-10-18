import React, { useState } from 'react'
import { StyledCategoriesSection } from './style'
import { useTranslation } from 'react-i18next'

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const { t } = useTranslation()

    const categories = [
        { id: 2, name: t('inscriptions.categories.items.2.name'), info: t('inscriptions.categories.items.2.info') },
        { id: 3, name: t('inscriptions.categories.items.3.name'), info: t('inscriptions.categories.items.3.info') },
        { id: 5, name: t('inscriptions.categories.items.5.name'), info: t('inscriptions.categories.items.5.info') },
        { id: 6, name: t('inscriptions.categories.items.6.name'), info: t('inscriptions.categories.items.6.info') },
        { id: 7, name: t('inscriptions.categories.items.7.name'), info: t('inscriptions.categories.items.7.info') },
        { id: 8, name: t('inscriptions.categories.items.8.name'), info: t('inscriptions.categories.items.8.info') },
        { id: 9, name: t('inscriptions.categories.items.9.name'), info: t('inscriptions.categories.items.9.info') },
        { id: 10, name: t('inscriptions.categories.items.10.name'), info: t('inscriptions.categories.items.10.info') },
        { id: 11, name: t('inscriptions.categories.items.11.name'), info: t('inscriptions.categories.items.11.info') },
        { id: 13, name: t('inscriptions.categories.items.13.name'), info: t('inscriptions.categories.items.13.info') },
        { id: 14, name: t('inscriptions.categories.items.14.name'), info: t('inscriptions.categories.items.14.info') },
        { id: 15, name: t('inscriptions.categories.items.15.name'), info: t('inscriptions.categories.items.15.info') },
        { id: 16, name: t('inscriptions.categories.items.16.name'), info: t('inscriptions.categories.items.16.info') },
    ]

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory(null)
            return
        }
        setSelectedCategory(category)
    }

    return (
        <StyledCategoriesSection>
            <div className="content">
                <div className="title">
                    <h2>{t('inscriptions.categories.title')}</h2>
                </div>

                <div className="categories">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={selectedCategory === category ? 'active category' : 'category'}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.name}
                        </button>
                    ))}
                    <a
                        className='category external-button'
                        href='/assets/documents/2024_La_Vara_Categorias.pdf'
                        target='_blank'
                        rel='noreferer'
                    >
                        {t('inscriptions.categories.description')}
                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_227_230)">
                                <path d="M25 21.0001V15.9932L3.8147e-06 15.9932V21.0001H25Z" fill="#EED116"/>
                                <path d="M0 5.08641V0L25 10.8502V15.9366L0 5.08641Z" fill="#4FC5D3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_227_230">
                                    <rect width="25" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>

            <div className={selectedCategory ? 'info active' : 'info'}>
                <p>{selectedCategory?.info}</p>
            </div>
        </StyledCategoriesSection>
    )
}

export default Categories
