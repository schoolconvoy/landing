'use client'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function GAnalytics({ measurementId })
{
	return (
		<GoogleAnalytics gaMeasurementId={measurementId} trackPageViews strategy="lazyOnload" />
	)
}