import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Button
} from '@mui/material'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

export const FORTISBC_OFFICIAL_URL = 'https://www.fortisbc.com/rebates-and-energy-savings/rebates-and-offers?category=home'

/**
 * Top Moving Flash Ribbon for the Home Page
 * Animates as a moving marquee ticker and sends users directly to official FortisBC rebates site.
 */
export const HomeFlashBar = ({ onHeightChange }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.add('has-rebate-flash-bar')
      if (onHeightChange) onHeightChange(42)
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('has-rebate-flash-bar')
      }
    }
  }, [onHeightChange])

  return (
    <Box
      id="home-rebate-flash-bar"
      sx={{
        background: 'linear-gradient(90deg, #091a33 0%, #003e73 45%, #082142 100%)',
        color: '#ffffff',
        borderBottom: '2px solid #ffb703',
        py: { xs: 0.65, md: 0.75 },
        px: 1,
        position: 'relative',
        zIndex: 1040,
        boxShadow: '0 3px 12px rgba(0,0,0,0.22)',
        userSelect: 'none',
        overflow: 'hidden'
      }}
    >
      <Box
        component="marquee"
        direction="left"
        scrollamount="8"
        onMouseEnter={(e) => {
          try {
            e.currentTarget.stop()
          } catch (err) { }
        }}
        onMouseLeave={(e) => {
          try {
            e.currentTarget.start()
          } catch (err) { }
        }}
        sx={{
          display: 'block',
          width: '100%',
          verticalAlign: 'middle',
          m: 0,
          p: 0,
          cursor: 'pointer'
        }}
      >
        <Box
          component="a"
          href={FORTISBC_OFFICIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2 },
            whiteSpace: 'nowrap',
            '&:hover': { textDecoration: 'none' }
          }}
        >
          {/* Animated Flash Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: '#e21e26',
              color: '#ffffff',
              fontSize: { xs: '0.72rem', sm: '0.78rem' },
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              px: { xs: 1.1, sm: 1.4 },
              py: 0.3,
              borderRadius: '20px',
              boxShadow: '0 0 12px rgba(226, 30, 38, 0.7)',
              animation: 'flashPulse 1.8s infinite ease-in-out',
              '@keyframes flashPulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                '50%': { transform: 'scale(1.05)', opacity: 0.9 }
              }
            }}
          >
            <FlashOnIcon sx={{ fontSize: '0.95rem', color: '#ffea00' }} />
            <span>REBATE FLASH</span>
          </Box>

          {/* Core Offer */}
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '0.84rem', sm: '0.94rem' },
              fontWeight: 500,
              color: '#f8fafc'
            }}
          >
            Save <strong style={{ color: '#ffb703', fontWeight: 800 }}>$4,000 to $8,000</strong> with FortisBC Rebates on Dual Fuel Heat Pump & Heating Upgrades!
          </Typography>

          {/* Action Button that moves along */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: '#ffb703',
              color: '#091a33',
              fontWeight: 700,
              fontSize: { xs: '0.72rem', sm: '0.78rem' },
              px: { xs: 1.2, sm: 1.8 },
              py: 0.35,
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#ffd166'
              }
            }}
          >
            <span>View Official FortisBC Rebates</span>
            <OpenInNewIcon sx={{ fontSize: '0.82rem' }} />
          </Box>

          <span style={{ color: '#ffea00', opacity: 0.7, margin: '0 8px' }}>✦</span>

          {/* Secondary Details */}
          <Typography
            component="span"
            sx={{
              fontSize: { xs: '0.82rem', sm: '0.92rem' },
              fontWeight: 500,
              color: '#e2e8f0'
            }}
          >
            Standard Residential: Up to <strong style={{ color: '#ffb703' }}>$4,000</strong> &bull; Income-Qualified: Up to <strong style={{ color: '#ffb703' }}>$8,000</strong>
          </Typography>


          {/* Action Button that moves along */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              backgroundColor: '#ffb703',
              color: '#091a33',
              fontWeight: 700,
              fontSize: { xs: '0.72rem', sm: '0.78rem' },
              px: { xs: 1.2, sm: 1.8 },
              py: 0.35,
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#ffd166'
              }
            }}
          >
            <span>View Official FortisBC Rebates</span>
            <OpenInNewIcon sx={{ fontSize: '0.82rem' }} />
          </Box>
          <span style={{ color: '#ffea00', opacity: 0.7, margin: '0 8px' }}>✦</span>
        </Box>
      </Box>
    </Box>
  )
}

/**
 * Hero Flash Badge for front-and-center placement in Hero
 * Links directly to official FortisBC rebates site.
 */
export const HeroFlashBadge = () => {
  return (
    <Box
      component="a"
      href={FORTISBC_OFFICIAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: { xs: 0.8, sm: 1.2 },
        backgroundColor: 'rgba(16, 19, 45, 0.92)',
        backdropFilter: 'blur(8px)',
        border: '1.5px solid #ffb703',
        borderRadius: { xs: '30px', sm: '50px' },
        px: { xs: 1.4, sm: 2.4 },
        py: { xs: 0.6, sm: 0.85 },
        mt: 2,
        maxWidth: '92vw',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 30px rgba(255, 183, 3, 0.4)',
          borderColor: '#ffe066',
          textDecoration: 'none'
        }
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.4,
          backgroundColor: '#e21e26',
          color: '#ffffff',
          borderRadius: '50px',
          px: { xs: 1, sm: 1.2 },
          py: 0.25,
          fontSize: { xs: '0.68rem', sm: '0.78rem' },
          fontWeight: 800,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          animation: 'flashPulseDot 1.8s infinite ease-in-out',
          '@keyframes flashPulseDot': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.06)' }
          }
        }}
      >
        <FlashOnIcon sx={{ fontSize: { xs: '0.85rem', sm: '0.95rem' }, color: '#ffea00' }} />
        <span>FLASH</span>
      </Box>

      <Typography
        component="span"
        sx={{
          color: '#ffffff',
          fontSize: { xs: '0.76rem', sm: '0.92rem' },
          fontWeight: 600,
          textAlign: 'center'
        }}
      >
        <span style={{ color: '#ffb703', fontWeight: 800 }}>$4,000 – $8,000 Rebate:</span> FortisBC Dual Fuel Upgrades
      </Typography>

      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.3,
          color: '#1394cd',
          fontSize: { xs: '0.74rem', sm: '0.84rem' },
          fontWeight: 700,
          ml: { xs: 0, sm: 0.5 }
        }}
      >
        <span>Official Site</span>
        <OpenInNewIcon sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' } }} />
      </Box>
    </Box>
  )
}
